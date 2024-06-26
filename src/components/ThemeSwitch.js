'use client';

import React, { useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '../../context/theme-context';

function ThemeSwitch() {

    const { toggleTheme, theme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-[#c79e55] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-[#c79e55]" onClick={toggleTheme}
    >
        {
            theme === "light" ? <BsSun /> : <BsMoon />
        }
    </button>
  )
}

export default ThemeSwitch