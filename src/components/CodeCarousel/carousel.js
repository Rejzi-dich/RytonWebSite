import { useState } from 'react';
import './carousel.css';

const codeExamples = [
  {
    name: "User.ry",
    code: `pack User {
    def name:String = "John"
    def age:Int = 25

    func greet {
        print(f"Hello, {name}!")
    }
}`
  },
  {
    name: "DataProcessor.ry", 
    code: `func processData(items: Array) {
    for item in items {
        if item > 10 {
            output item
        }
    }
}`
  },
  {
    name: "Hello.ry",
    code: `func Main {
    print("Hello, World!")
}`
  },
  {
    name: "Hello_2.ry",
    code: `func Main => print("Hello, World!")`
  },
  {
    name: "Shell.ry",
    code: `module import {
    std.Core.stdTypes
    std.Core.stdModifiers
    std.Core.stdFunctions
    std.Shell
    std.Files
    std.Info
    std.Paths
    std.fStrings
}

def userName:String = runCmdOutput("whoami")

pack DeltaShell {
    func currentDir:String => runCmdOutput("pwd").replace(f"/home/{userName}", "~")

    func commandExecute(command: String) {
        val command = command.split(" ")
        if command[0] == "cd" {
            if len(command) == 1 => changeDir(f"/home/{userName}")
            else {
                val fullCurrentPath = runCmdOutput("pwd")
                val dir = f"{fullCurrentPath}/{command[1]}"
                if isDirectory(dir) == False =>
                    print(f"<red|bold>Error</red|bold>: Directory <italic>\`{dir}\`</italic> not found.")
                else =>
                    changeDir(dir)
            }
        } elif command[0] == "cls" {
            if runCmdSilent("clear") == False {
                print("<red|bold>Error</red|bold>: Command execute failure.")
            }
        }
        else => runCmdOutput(command.join(" ")).print()
    }

    func UIShell {
        def command = " "
        infinit 10 {
            command = input(f"<green>{userName}<bold>#</bold></green>[<blue|italic>{this.currentDir()}</blue|italic>]> ")
            if command == "exit" => break
            elif command == " " => noop
            else => this.commandExecute(command)
        }
    }
}

func Main => DeltaShell().UIShell()
    `
  },
  {
    name: "Cycles.ry",
    code: `// cycle for:
for item in items {
    print(item)
}
// cycle while:
while 10 == 10 {
    print("10 is 10")
}
// cycle infinit:
infinit 1000 {
    print("print infinit")
}
    `
  },
  {
    name: "Functions.ry",
    code: `//  One Line Simple
func Function => print("hi")

// One Line Args
func Function(Arg: Int = 10) => print(Arg)

// Multi Line
func Function() {
    // multiline code
}

// Return
func Function(): String {
    output "myString"
}

// Modificators
func Function(Arg: String): String !(mod, mod2) {
    output "myString"
}

`
  },
  {
    name: "Classes.ry",
    code: `
// Simple Class
pack MyClass {
    // code 
}

// Parent
pack MyClass <- MyClassParent {
    // code
}

// One Line Function in One Line Class
pack MyClass =>
    func myFunction =>
        print("Hello, World!")

// Modificator
pack MyClass !(private) {
    // code
}
`
  },
  {
    name: "comments.ry",
    code: `// One Line cooment
</
    multiline comment
/>

/!/ 
    docs multiline comment
/!/`
  },
  {
    name: "fStrings.ry",
    code: `def myVar = f"Formatted string"
// colored output
print(f"<green>my</green> <bold>{myVar}</yellow>") // output - my Formatted string
// or bold
print(f"<green|bold>my</green|bold>") // output bold and green - my
// or italic
print(f"<green|italic>my</green|italic>")

`
  },
  {
    name: "Vars.ry",
    code: `// const
val Name = "my Const"

// var
def Name = "my Variable"

// with typing
def Name: Int = 10
val Name: String = "String"

def myArray: Array<Int> = [1, 2, 3]
// or
def myArray: IntArray = [1, 2, 3]  // \`IntArray\` is a type alias for \`Array<Int>\`

`
  },
];

const CodeCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="code-browser">
      <div className="file-list">
        <div className="file-list-header">Examples</div>
        <div className="file-list-content">
          {codeExamples.map((example, idx) => (
            <button
              key={idx}
              className={`file-item ${idx === selectedIndex ? 'active' : ''}`}
              onClick={() => setSelectedIndex(idx)}
            >
              {example.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="code-panel">
        <div className="panel-header">{codeExamples[selectedIndex].name}</div>
        <pre className="code-block">
          <code>{codeExamples[selectedIndex].code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeCarousel;

