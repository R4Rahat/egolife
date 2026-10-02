import Admin from "./admin.model.js";
import bcrypt from "bcrypt";

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

const admins = [
  {
    name: "Admin One",
    email: email,
    password: password
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
