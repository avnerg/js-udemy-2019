function interviewQuestion(job){
        return function(name){
            if(job === 'designer'){
                console.log(name + ', can you please explain what UX design is?');
            }
            else if(job === 'teacher'){
                console.log('What subject do you teach ' + name + '?');
        }
    }
}
var question = interviewQuestion('designer');
question('John');
interviewQuestion('teacher')('Mark');
