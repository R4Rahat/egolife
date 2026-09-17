import Admin from "./admin.model.js";
import bcrypt from "bcrypt";


const admins = [
  {
    name: "Admin One",
    email: "admin1@gmail.com",
    password: "admin123",
  },
  {
    name: "Admin Two",
    email: "admin2@gmail.com",
    password: "admin123",
  },
  {
    name: "Admin Three",
    email: "admin3@gmail.com",
    password: "admin123",
  },
];


export const seedAdmin = async() => {
    try {
        for(const admin of admins) {
            const exist = await Admin.findOne({email: admin.email});
            if(exist){
                continue;
            }
            const hashpassword = await bcrypt.hash(admin.password, 10);
            await Admin.create({
                name: admin.name,
                email: admin.email,
                password: hashpassword,
            });
            console.log(`Admin seeded ${admin.name}`);
        }
    } catch (error) {
        console.log(error);
    }
}
