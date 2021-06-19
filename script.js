let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')
let inpNewTask = $('#inpNewTask')

inpNewTask.keypress((e) => {
    if(e.which == 13){
           addItem()
    }
})
inpNewTask.on('input',toggleButtons)

function addItem() {
    let listItem = $('<li>',{
        'class' : 'list-group-item',
        text : inpNewTask.val()
    })
    listItem.click((event) => {
        $(event.target).toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleButtons()
}
function sortTasks(){
    $('#ulTasks .done').appendTo("#ulTasks")
}
function clearDone(){
    $('#ulTasks .done').remove()
    toggleButtons()
}


btnCleanup.click(clearDone)
btnAdd.click(addItem)
btnReset.click(() =>  {
    inpNewTask.val('')
    toggleButtons()
})
btnSort.click(sortTasks)

function toggleButtons(){
         btnAdd.prop('disabled', inpNewTask.val() == '' )
         btnReset.prop('disabled', inpNewTask.val() == '' )
         btnSort.prop('disabled', ulTasks.children.length<1 )
         btnCleanup.prop('disabled', ulTasks.children.length<1 )
}