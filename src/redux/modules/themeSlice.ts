'use client';
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        setThemeLight: () => 'light',
        setThemeDark: () => 'dark'
    }
})