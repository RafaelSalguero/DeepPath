import { path } from "./index";
interface MyDeepType {
    person: {
        names: {
            lastnames: {
                first: string,
                second: string;
            }
            firstname: string;
        }
        age: number;
    }
    other: string;
}

const x = path<MyDeepType>()("person")("names")("lastnames")("second");
const myPath: string[] = x.path;