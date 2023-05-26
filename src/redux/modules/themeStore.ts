'use client';
import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './themeSlice';

export const { setThemeLight, setThemeDark } = themeSlice.actions;

export const themeStore = configureStore({
    reducer: themeSlice.reducer
})
