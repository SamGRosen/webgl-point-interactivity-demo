import { scale } from "./utilities";
import { format, precisionRound } from "d3-format";

/**
 * Create a function which maps a genome pair to a location in the entire genome
 *
 * @param {String} genomeId key from genomeSizes object
 * @returns a function which maps a (chrId, pairNum) => to
 *  a number between 1 and total number of genes in the genome
 */
const createPairMapperToGenome = (genomeId) => {
  let chrSizes = genomeSizes[genomeId];

  let chrStarts = new Map();
  let cumulativeTotal = 0;
  chrSizes.forEach((value, key) => {
    chrStarts.set(key, cumulativeTotal);
    cumulativeTotal += value;
  });

  return (chr, pairNum) => {
    return chrStarts.get(chr) + pairNum;
  };
};

class GenomeScale {
  /**
   * A scale used to map a genome pair to a location between -1 and 1 for data visualization.
   * Also contains inverse and utility functions for getting labels for axis.
   *
   * @param {String} genomeId key from genomeSizes object
   * @param {Array} domain array of length 2 containing the start and end of the genome
   *   for the scale. ex: ["chr2:1000", "chr3:2000"]
   */
  constructor(genomeId, domain) {
    if (genomeSizes[genomeId] === undefined) {
      console.error(`${genomeId} is not a recognized genome!`);
    }
    this.genomeId = genomeId;
    this.domain = domain;

    let [startChr, startPair] = domain[0]
      .substring(3) // Remove chr
      .split(":"); // split chromesome and pair number
    startPair = parseInt(startPair);

    let [endChr, endPair] = domain[1].substring(3).split(":");
    endPair = parseInt(endPair);

    this.mapPairToGenomeIndex = createPairMapperToGenome(genomeId);
    const firstPairInDomain = this.mapPairToGenomeIndex(startChr, startPair);
    const lastPairInDomain = this.mapPairToGenomeIndex(endChr, endPair);
    this.mapGenomeIndexToClipSpace = scale(
      [firstPairInDomain, lastPairInDomain],
      [-1, 1]
    );
    this.mapGenomeIndexToClipSpaceInverse = scale(
      [-1, 1],
      [firstPairInDomain, lastPairInDomain]
    );
  }

  /**
   * Map a genome pair to [-1, 1] with the parts.
   *
   * @param {String} chr id of chromosome in genome
   * @param {Number} pair location in chromosome
   * @returns value in [-1, 1] corresponding to genome range location
   */
  toClipSpaceFromParts(chr, pair) {
    return this.mapGenomeIndexToClipSpace(this.mapPairToGenomeIndex(chr, pair));
  }

  /**
   * Utility method for calling this.toClipSpaceFromParts.
   *
   * @param {String} pairStr in form "chrID:geneNumber" ex: "chr1:1000"
   * @returns value in [-1, 1] corresponding to genome range location
   */
  toClipSpaceFromString(pairStr) {
    let [chr, pair] = pairStr.substring(3).split(":");
    pair = parseInt(pair);
    return this.toClipSpaceFromParts(chr, pair);
  }

  /**
   * Get the gene id from a value between [-1, 1]
   *
   * @param {Number} num number between [-1, 1]
   * @param {String} formatting used for formatting gene number with d3-format
   * @returns `chr${chrId}:${chrLoc}`
   */
  inverse(num, formatting = false) {
    let genomeSpot = Math.floor(this.mapGenomeIndexToClipSpaceInverse(num));
    let chrId;
    let chrLoc;
    let cumulativeTotal = 0;
    for (const [chrKey, pairCount] of genomeSizes[this.genomeId].entries()) {
      if (cumulativeTotal + pairCount >= genomeSpot) {
        chrLoc = genomeSpot - cumulativeTotal;
        chrId = chrKey;
        break;
      }
      cumulativeTotal += pairCount;
    }

    return formatting
      ? `chr${chrId}:${format(formatting)(chrLoc)}`
      : `chr${chrId}:${chrLoc}`;
  }

  /**
   * Get a sequence of ticks for a range in the genome.
   *
   * @param {Number} start number between [-1, 1]
   * @param {Number} end number between [-1, 1] > start
   * @returns object with tickCoords and corresponding tickLabels property
   */
  getTickCoordsAndLabels(start, end) {
    let [startChr, startPair] = this.inverse(start).substring(3).split(":");
    let [endChr, endPair] = this.inverse(end).substring(3).split(":");

    const toReturn = [];
    let suggestedFormat;
    if (startChr === endChr) {
      let difference = endPair - startPair;
      let magnitude = Math.floor(Math.log10(difference));
      let startingValue = startPair - (startPair % 10 ** magnitude);
      suggestedFormat = precisionRound(10 ** magnitude, startingValue);

      for (
        let currValue = startingValue;
        currValue < endPair;
        currValue += 10 ** magnitude
      ) {
        toReturn.push(this.toClipSpaceFromParts(startChr, currValue));
      }
    } else {
      suggestedFormat = "1";
      for (const chrId of genomeSizes[this.genomeId].keys()) {
        toReturn.push(this.toClipSpaceFromParts(chrId, 1));
      }
    }
    return {
      tickCoords: toReturn,
      tickLabels: toReturn.map((coord) =>
        this.inverse(coord, format(`.${suggestedFormat}s`))
      ),
    };
  }

  /**
   * Utility method for getting a GenomeScale across an entire genome.
   *
   * @param {String} genomeId from genomeSizes
   * @returns a GenomeScale across an entire genome
   */
  static completeScale(genomeId) {
    const chrSizes = genomeSizes[genomeId];
    const finalEntry = [...chrSizes.entries()][chrSizes.size - 1];

    return new GenomeScale(genomeId, [
      "chr1:1",
      `chr${finalEntry[0]}:${finalEntry[1]}`,
    ]);
  }
}

/**
 * Available genomes to visualize. Each genome is a map from chromosome id to number of genes in chromosome.
 * Order matters as maps remember insertion order.
 */
const genomeSizes = {
  hg38: new Map([
    ["1", 248956422], // chr1
    ["2", 242193529], // chr2
    ["3", 198295559], // ...
    ["4", 190214555],
    ["5", 181538259],
    ["6", 170805979],
    ["7", 159345973],
    ["8", 145138636],
    ["9", 138394717],
    ["10", 135086622],
    ["11", 133797422],
    ["12", 133275309],
    ["13", 114364328],
    ["14", 107043718],
    ["15", 101991189],
    ["16", 90338345],
    ["17", 83257441],
    ["18", 80373285],
    ["19", 58617616],
    ["20", 64444167], // ...
    ["21", 46709983], // chr21
    ["22", 50818468], // chr22
    ["X", 156040895], // chrX
    ["Y", 57227415], // chrY
  ]),

  hg19: new Map([
    ["1", 249250621], // chr1
    ["2", 243199373], // chr2
    ["3", 198022430], // ...
    ["4", 191154276],
    ["5", 180915260],
    ["6", 171115067],
    ["7", 159138663],
    ["8", 146364022],
    ["9", 141213431],
    ["10", 135534747],
    ["11", 135006516],
    ["12", 133851895],
    ["13", 115169878],
    ["14", 107349540],
    ["15", 102531392],
    ["16", 90354753],
    ["17", 81195210],
    ["18", 78077248],
    ["19", 59128983],
    ["20", 63025520], // ...
    ["21", 48129895], // chr21
    ["22", 51304566], // chr22
    ["X", 155270560], // chrX
    ["Y", 59373566], // chrY
  ]),

  mm39: new Map([
    ["1", 195154279], // chr1
    ["2", 181755017], // chr2
    ["3", 159745316], // ...
    ["4", 156860686],
    ["5", 151758149],
    ["6", 149588044],
    ["7", 144995196],
    ["8", 130127694],
    ["9", 124359700],
    ["10", 130530862],
    ["11", 121973369],
    ["12", 120092757],
    ["13", 120883175],
    ["14", 125139656],
    ["15", 104073951],
    ["16", 98008968],
    ["17", 95294699], // ...
    ["18", 90720763], // chr18
    ["19", 61420004], // chr19
    ["X", 169476592], // chrX
    ["Y", 91455967], // chrY
  ]),
};

export { genomeSizes, GenomeScale };
