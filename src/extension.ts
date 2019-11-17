import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('"Project Board" extension activated.');

	let disposable = vscode.commands.registerCommand('projectBoard.helloWorld', () => {
    vscode.window.showInformationMessage('Project Board - Hello World!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
