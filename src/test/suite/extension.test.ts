import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Tests', async () => {
  vscode.window.showInformationMessage('Start all tests.');

  suiteSetup(async () => {
    // Activate the 'Project Board' extension.
    await vscode.extensions.getExtension('habenamare.vscode-project-board')!.activate();
  });

  test(`Activation of the 'Project Board' extension`, async () => {
    const projectBoardExtension = await vscode.extensions.getExtension('habenamare.vscode-project-board');

    assert.equal(true, projectBoardExtension!.isActive);
  });

  test(`Registration of the 'projectBoard.helloWorld' command`, async () => {
    const listOfAvailableCommands = await vscode.commands.getCommands();

    assert.notEqual(-1, listOfAvailableCommands.indexOf('projectBoard.helloWorld'));
  });
});
