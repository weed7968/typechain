interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(config: number): number;
}
