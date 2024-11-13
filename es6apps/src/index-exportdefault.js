import TodoService from "./todo.service.js";

function main() {
    let todoService = new TodoService()
    console.log(todoService.findAll())
}
main()