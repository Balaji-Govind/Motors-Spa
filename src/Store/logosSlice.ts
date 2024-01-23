// redux/logosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LogoState {
  formModal: string | null;
  formData: any[];
}

const initialState: LogoState = {
  formModal: null,
  formData: [],
};

const logosSlice = createSlice({
  name: 'logos',
  initialState,
  reducers: {
    setFormModal: (state, action: PayloadAction<string | null>) => {
      state.formModal = action.payload;
    },
    submitForm: (state, action: PayloadAction<any>) => {
      state.formData.push(action.payload);
    },
  },
});

export const { setFormModal, submitForm } = logosSlice.actions;
export const selectFormModal = (state: RootState) => state.logos.formModal;
export const selectFormData = (state: RootState) => state.logos.formData;

export default logosSlice.reducer;
