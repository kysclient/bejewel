
export const numberRegex = (param: string): boolean => {
    const regex: RegExp = /^[0-9]+$/;
    return regex.test(param)
}