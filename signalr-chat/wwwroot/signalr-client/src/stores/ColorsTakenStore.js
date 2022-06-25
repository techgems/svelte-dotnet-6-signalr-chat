import { writable } from 'svelte/store';
import axios from 'axios';
const getColors = async () => {
    let colors = await axios.get("https://localhost:7127/api/Colors/AvailableColors");
    return colors.data;
};
export const colors = writable(await getColors());
//# sourceMappingURL=ColorsTakenStore.js.map