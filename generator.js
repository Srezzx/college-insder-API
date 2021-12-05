const fs=require('fs');
const faker=require('faker');

var posts = {
   data: []
};
var num_of_entries=100;

for(i=0; i<num_of_entries; i++){
    author_name=faker.name.findName();
    post_title=faker.lorem.sentence();
    post_body=faker.lorem.paragraph();
    post_image=faker.image.business(); 
    posts.data.push({author_name: author_name, post_title: post_title, post_body: post_body, post_image:post_image});
}


fs.writeFile('data.json',JSON.stringify(posts), err=>{
    if(err) throw err;
  })


