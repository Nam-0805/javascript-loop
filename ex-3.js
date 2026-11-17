// Exercise #3: Find a Minimum Score
// สมมุติว่าเรามี Variable ตั้งต้น studentScores ซึ่งบรรจุคะแนนสอบของนักเรียนในห้อง ดังนี้ [100, 20, 3, 100]

// ให้เขียนโปรแกรมในการหาคะแนนสอบที่น้อยที่สุดของนักเรียนในห้อง

// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
let scores = [100, 20, 3, 1000];
let minScore;
minScore = scores[0]
// Start coding here
for(let i = 0; i < scores.length; i++){
    if(scores[i] <= minScore) {
        minScore = scores[i]
    }
}

console.log(minScore);


