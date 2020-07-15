module.exports = {
  rootDir: ".",
  displayName: { name: "enzyme-setup", color: "blue" },
  runner: "jest-runner", // default
  verbose: true,
  roots: ["./Tests"], // directories
  moduleFileExensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>Tests/setupTest.js"],
};
