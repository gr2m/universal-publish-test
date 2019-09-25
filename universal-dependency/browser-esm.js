import { subDependency } from "@gr2m/universal-sub-dependency";

export function dependency() {
  console.log(
    '[@gr2m/universal-dependency] browser "module" entry point override'
  );
  subDependency();
}
