// Generated from: tests/agui.feature
import { test } from "playwright-bdd";

test.describe('AGUI', () => {

  test('Agent Logs in to AGUI', { tag: ['@login'] }, async ({ Given, page, When, And, Then, context }) => { 
    await Given('SSO login page is accessible', null, { page }); 
    await When('username is entered "d50qamode3may.Agent.Two"', null, { page }); 
    await And('password is entered "Password123!"', null, { page }); 
    await Then('agent login is successful', null, { page }); 
    await When('agent selects "Contact Center Agent Workspace" tile', null, { page, context }); 
    await Then('agent navigates to Agent Workspace'); 
    await When('agent changes status to "Available"', null, { page }); 
    await Then('agent status is changed to "Available"'); 
    await When('agent logs out', null, { page }); 
    await Then('agent logs out successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/agui.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given SSO login page is accessible","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When username is entered \"d50qamode3may.Agent.Two\"","stepMatchArguments":[{"group":{"start":20,"value":"\"d50qamode3may.Agent.Two\"","children":[{"start":21,"value":"d50qamode3may.Agent.Two","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And password is entered \"Password123!\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Password123!\"","children":[{"start":21,"value":"Password123!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then agent login is successful","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When agent selects \"Contact Center Agent Workspace\" tile","stepMatchArguments":[{"group":{"start":14,"value":"\"Contact Center Agent Workspace\"","children":[{"start":15,"value":"Contact Center Agent Workspace","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then agent navigates to Agent Workspace","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When agent changes status to \"Available\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Available\"","children":[{"start":25,"value":"Available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then agent status is changed to \"Available\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Available\"","children":[{"start":28,"value":"Available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When agent logs out","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then agent logs out successfully","stepMatchArguments":[]}]},
]; // bdd-data-end