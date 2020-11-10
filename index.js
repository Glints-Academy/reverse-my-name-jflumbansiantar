function reverseMyName(str) {
    // put your code here
    let myName = "";
    for (let i = str.length; i >= 0 ; i--) {
        myName += str.charAt(i)
    }
    // console.log(myName, '--try')
    str = myName
    return str
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")