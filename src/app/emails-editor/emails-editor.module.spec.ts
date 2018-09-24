import { EmailsEditorModule } from './emails-editor.module';

describe('EmailsEditorModule', () => {
  let emailsEditorModule: EmailsEditorModule;

  beforeEach(() => {
    emailsEditorModule = new EmailsEditorModule();
  });

  it('should create an instance', () => {
    expect(emailsEditorModule).toBeTruthy();
  });
});
