import { create } from "zustand";

type ViewMode = "board" | "list";

interface UIState {
  viewMode: ViewMode;
  selectedCategory: string | null;
  searchQuery: string;
  setViewMode: (mode: ViewMode) => void;
  setSearchQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  viewMode: "board",
  selectedCategory: null,
  searchQuery: "",
  setViewMode: (mode) => set({ viewMode: mode }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategory: (category) => set({ selectedCategory: category }),
}));
