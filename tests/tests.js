const { test } = require('@ianwalter/bff')
const { CLIEngine } = require('eslint')

test('pass', ({ expect }) => {
  const cli = new CLIEngine({ configFile: 'preact.js' })
  const { results: [pass] } = cli.executeOnFiles(['tests/fixtures/pass.jsx'])
  expect(pass.errorCount).toBe(0)
})

test('fail', ({ expect }) => {
  const cli = new CLIEngine({ configFile: 'preact.js' })
  const { results: [fail] } = cli.executeOnFiles(['tests/fixtures/fail.jsx'])
  console.log(fail)
  expect(fail.errorCount).toBe(6)
})
