import { createSlice } from "@reduxjs/toolkit";
import csv10 from "../examples/tsne-10th";

const controlsSlice = createSlice({
  name: "webglControls",
  initialState: {
    tool: "pan",
    specification: csv10,
    lockedX: false,
    lockedY: false,
  },
  reducers: {
    setSpecification(state, action) {
      state.specification = action.payload;
    },

    setTool(state, action) {
      state.tool = action.payload;
    },

    setScroll(state, action) {
      if (action.payload.axis === "x") {
        state.lockedX = action.payload.checked;
      } else if (action.payload.axis === "y") {
        state.lockedY = action.payload.checked;
      }
    },
  },
});

export const { setSpecification, setTool, setScroll } = controlsSlice.actions;

export default controlsSlice.reducer;
