import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data.json");

export interface Member {
    id: string;
    name: string;
    role: string;
    image: string;
    socials: Record<string, string>;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

export interface SiteData {
    members: Member[];
    projects: Project[];
}

export async function getData(): Promise<SiteData> {
    try {
        const data = await fs.readFile(dataFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data:", error);
        return { members: [], projects: [] };
    }
}

export async function saveData(data: SiteData): Promise<void> {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf8");
}
