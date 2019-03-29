import test from 'ava'
import { CLIEngine } from 'eslint'

test('pass', t => {
  const cli = new CLIEngine({ configFile: 'preact.js' })
  const { results: [pass] } = cli.executeOnFiles(['test/fixtures/pass.jsx'])
  t.is(pass.errorCount, 0)
})

test('fail', t => {
  const cli = new CLIEngine({ configFile: 'preact.js' })
  const { results: [fail] } = cli.executeOnFiles(['test/fixtures/fail.jsx'])
  t.log(fail)
  t.is(fail.errorCount, 6)
})
