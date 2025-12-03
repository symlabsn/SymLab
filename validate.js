const curriculum = require('./src/app/programming/curriculum.js');

console.log('✅ Syntax is valid!');
console.log(`Found ${curriculum.pythonCurriculum.length} chapters:`);

curriculum.pythonCurriculum.forEach((chapter, i) => {
    console.log(`  ${i + 1}. ${chapter.title} (${chapter.lessons.length} lessons)`);
});
