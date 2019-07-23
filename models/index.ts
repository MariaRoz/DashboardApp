interface Cources {
  guid: string;
  courceTitle: string;
  modules: Modules[];
}
interface Modules {
  guid: string;
  moduleTitle: string;
  moduleContent?: string;
  moduleStatus: Status;
}
interface Status {
  key: string;
  displayName: string;
}