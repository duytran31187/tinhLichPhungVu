module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '<rootDir>/src/lephucsinhlib.js',
    ],
    coverageReporters: [
        'html',
        'text',
        'text-summary'
    ],
    coverageThreshold: {
        'global': {
            'lines': 100,
            'statements': 100,
            'functions': 100,
            'branches': 86
        }
    }
}