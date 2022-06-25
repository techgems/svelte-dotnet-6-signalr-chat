import type { Writable } from 'svelte/store';
import type { ColorModel } from "../models/ColorModel";
import { writable } from 'svelte/store';
import axios from 'axios';

const getColors = async () => {
    let colors = await axios.get<ColorModel[]>("https://localhost:7127/api/Colors/AvailableColors");

    return colors.data;
}


export const colors: Writable<ColorModel[]> = writable(await getColors());