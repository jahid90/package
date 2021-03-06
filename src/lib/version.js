const versionRegEx = /^[\d]+.[\d]+.[\d]+$/;

const _validate = (version) => {
    const ok = versionRegEx.exec(version);
    if (!ok) {
        throw new Error('invalid version format; expected #.#.#');
    }
};

const _parse = (version) => {
    try {

        _validate(version);
        let [ major, minor, patch ] = version.split('.');

        return [ major, minor, patch ];

    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

const major = (version) => {
    let [ major, ...rest ] = _parse(version);

    return major;
};

const minor = (version) => {
    let [ major, minor, patch ] = _parse(version);

    return minor;
};

const patch = (version) => {
    let [ major, minor, patch ] = _parse(version);

    return patch;
};

const nextPatch = (version) => {
    let [ major, minor, patch ] = _parse(version);
    ++patch;

    return `${major}.${minor}.${patch}`;
};

const nextMajor = (version) => {
    let [ major, minor, patch ] = _parse(version);
    ++major;
    minor = 0;
    patch = 0;

    return `${major}.${minor}.${patch}`;
};

const nextMinor = (version) => {
    let [ major, minor, patch ] = _parse(version);
    ++minor;
    patch = 0;

    return `${major}.${minor}.${patch}`;
};

module.exports = {
    major,
    minor,
    patch,
    nextMajor,
    nextMinor,
    nextPatch
};
