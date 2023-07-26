describe("utils/env", () => {
  const PROCESS_BACKUP = process;
  let consoleErrorFunc: jest.SpyInstance;
  let processExitFunc: jest.SpyInstance;

  beforeAll(() => {
    consoleErrorFunc = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    processExitFunc = jest
      .spyOn(process, "exit")
      .mockImplementation((code?: number | undefined) => {
        throw new Error(`process.exit(${code})`);
      });
  });

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    consoleErrorFunc.mockClear();
    processExitFunc.mockClear();
  });

  afterAll(() => {
    process = PROCESS_BACKUP;
    consoleErrorFunc.mockRestore();
  });

  it("should exit with an error if required env vars are undefined", () => {
    process.env = { NODE_ENV: "test" };

    import("./env").catch(() => {
      expect(consoleErrorFunc).toHaveBeenCalledWith(
        "❌ Invalid environment variables:",
        JSON.stringify(
          {
            _errors: [],
            SENDGRID_API_KEY: {
              _errors: ["Required"],
            },
            SENDGRID_SENDER: {
              _errors: ["Required"],
            },
            SENDGRID_SUBSCRIBERS_LIST_ID: {
              _errors: ["Required"],
            },
            SENDGRID_CONTACT_EMAIL_TEMPLATE_ID: {
              _errors: ["Required"],
            },
          },
          null,
          4
        )
      );
      expect(processExitFunc).toHaveBeenCalledWith(1);
    });
  });

  it("should exit with an error if required env vars are misformatted", () => {
    process.env = {
      NODE_ENV: "test",
      SENDGRID_API_KEY: "string",
      SENDGRID_SENDER: "email",
      SENDGRID_SUBSCRIBERS_LIST_ID: "string",
      SENDGRID_CONTACT_EMAIL_TEMPLATE_ID: "string",
    };

    import("./env").catch(() => {
      expect(consoleErrorFunc).toHaveBeenCalledWith(
        "❌ Invalid environment variables:",
        JSON.stringify(
          {
            _errors: [],
            SENDGRID_SENDER: {
              _errors: ["Invalid email"],
            },
          },
          null,
          4
        )
      );
      expect(processExitFunc).toHaveBeenCalledWith(1);
    });
  });

  it("should be imported successfully if all required env vars are properly defined", () => {
    process.env = {
      NODE_ENV: "test",
      SENDGRID_API_KEY: "string",
      SENDGRID_SENDER: "email@test.com",
      SENDGRID_SUBSCRIBERS_LIST_ID: "string",
      SENDGRID_CONTACT_EMAIL_TEMPLATE_ID: "string",
    };

    import("./env").then(() => {
      expect(consoleErrorFunc).not.toHaveBeenCalled();
      expect(processExitFunc).not.toHaveBeenCalled();
    });
  });
});
