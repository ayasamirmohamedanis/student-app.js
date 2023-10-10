const yargs = require("yargs");
const students = require("./student");

yargs.command({
  command: "add",
  descibe: "add student",
  builder: {
    id: {
      describe: "this is id of student",
      demandOption: true,
      type: "number",
    },
    stName: {
      describe: "this is name of student",
      demandOption: true,
      type: "string",
    },
    degrees: {
      describe: "this is array of degrees of student",
      demandOption: true,
      type: "array",
    },
    comment: {
      describe: "this is comment of student",
      type: "string",
    },
  },
  handler: () =>
    students.addStudent(
      yargs.argv.id,
      yargs.argv.stName,
      yargs.argv.degrees,
      yargs.argv.comment
    ),
});

yargs.command({
  command: "delete",
  descibe: "delete student",
  builder: {
    id: {
      describe: "this is id of student",
      demandOption: true,
      type: "number",
    },
  },
  handler: () => students.deleteStudent(yargs.argv.id),
});

yargs.command({
  command: "read",
  descibe: "read student",
  builder: {
    stName: {
      describe: "this is name of student",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => students.readStudent(yargs.argv.stName),
});

yargs.command({
  command: "list",
  describe: "list all students",
  handler: () => students.getStudentsList(),
});

yargs.parse();
// console.log(yargs.argv);
