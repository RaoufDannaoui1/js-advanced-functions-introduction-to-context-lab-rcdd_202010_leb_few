// Your code here
<<<<<<< HEAD

let arr1=[a,b,c,55];
let arr2=[x,y,z,44];
=======
let arr1=[a,b,c,55];
>>>>>>> 2f20c8a3477d26f7b4baf1df3454d9f8a9de63c7

function createEmployeeRecord(arr1){
  return {
    firstName : arr1[0],
    familyName : arr1[1],
    title : arr1[2],
    payPerHour : arr1[3],
    timeInEvents : [],
    timeOutEvents : []
  };
}
<<<<<<< HEAD

function createEmployeeRecords(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent (employee, dateIn){
  let [date, hour] = dateIn.split(' ')
  employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

function createTimeOutEvent  (employee, dateOut){
  let [date, hour] = dateOut.split(' ')
  employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

function hoursWorkedOnDate (employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

function allWagesFor (employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

function calculatePayroll (arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}
=======
>>>>>>> 2f20c8a3477d26f7b4baf1df3454d9f8a9de63c7
