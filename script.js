function firstWord(s) {
    // Trim leading spaces to handle cases where the string starts with spaces
    s = s.trimStart();

    
    if (s === "") {
        return "";
    }

    // Find the index of the first space
    const firstSpaceIndex = s.indexOf(' ');

    // If there is no space, return the entire string
    if (firstSpaceIndex === -1) {
        return s;
    }

    // Return the substring up to the first space
    return s.substring(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s)); 



