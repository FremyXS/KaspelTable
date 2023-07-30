export const sortedByDate = (a: Date, b: Date) => {
    const difference = a.getTime() - b.getTime();
    return difference / (1000 * 3600 * 24);
}