import {  OnTask, Fatcat, QuikLogVSC, QuikLogJB, QuikLogVSCMarket, QuikLogJBMarket, OnTaskIcon, QuikLogIcon, FatcatIcon } from '../assets'

const projectData = [
    {
        src: Fatcat,
        staticSrc: null,
        sideSrc: FatcatIcon,
        alt: "Fatcat",
        title: "Fatcat",
        subtitle: null,
        tech: "Vue 3, TypeScript, Spring Boot, PostgreSQL",
        githubHref: "https://github.com/codeygallup/fatcat_expense_tracker",
        link: "https://fatcat-expense-tracker.vercel.app/",
        downloads: null,
    },
    {
        src: QuikLogVSC,
        staticSrc: QuikLogVSCMarket,
        sideSrc: QuikLogIcon,
        alt: "QuikLog VS Code",
        title: "QuikLog",
        subtitle: "VS Code",
        tech: "TypeScript, VS Code Extension API",
        githubHref: "https://github.com/codeygallup/QuikLog",
        link: "https://marketplace.visualstudio.com/items?itemName=codeygallup.quiklog",
        downloads: "100+",
    },
    {
        src: QuikLogJB,
        staticSrc: QuikLogJBMarket,
        sideSrc: QuikLogIcon,
        alt: "QuikLog JetBrains",
        title: "QuikLog",
        subtitle: "JetBrains",
        tech: "Kotlin, IntelliJ Platform SDK",
        githubHref: "https://github.com/codeygallup/QuikLog",
        link: "https://plugins.jetbrains.com/plugin/30096-quiklog",
        downloads: "150+",
    },
    {
        src: OnTask,
        staticSrc: null,
        sideSrc: OnTaskIcon,
        alt: "OnTask",
        title: "OnTask",
        subtitle: null,
        tech: "MongoDB, React, Express, Node",
        githubHref: "https://github.com/codeygallup/onTask",
        link: "https://ontask-cf7r.onrender.com/",
        downloads: null,
    },
]

export default projectData