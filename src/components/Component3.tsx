import React from "react"

export default function Component3 () {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 grid-rows-[auto_1fr] h-[400px] w-[600px] gap-0">
                <div className="col-start-1 row-start-1 p-1 self-start">
                    <img className="w-[200px] h-[170px] object-cover rounded-xl" src="https://placehold.co/100x100" alt="photo3" />
                </div>
                <div className="relative col-start-2 col-span-2 row-start-1 bg-teal-900 pt-3 pl-3 pr-3 text-white rounded-tl-xl rounded-tr-xl z-10">
                    <p className="text-[14px] leading-relaxed font-medium tracking-wide">
                        Top Left Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat numquam consequatur harum minus quas molestias ullam sed rem et. Molestias delectus totam nostrum aspernatur pariatur adipisci tenetur optio beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptate eos voluptatibus, aliquam explicabo deleniti fugit tenetur magni lorem line line
                    </p>
                </div>
                <div className="relative row-start-2 col-span-3 bg-teal-900 pl-3 pb-3 pr-3 pt-3 text-white rounded-bl-xl rounded-br-xl rounded-tl-xl -mt-[12px] z-0">
                    <p className="text-[14px] leading-relaxed font-medium tracking-wide">
                        Bottom Row Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis et magni quis ratione, quaerat incidunt tempora totam, nostrum dicta doloremque at repellendus autem ipsum animi eligendi! Autem, eius sapiente! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ullam iusto sapiente impedit fuga aperiam itaque facere nemo dolores perferendis excepturi repellendus, blanditiis fugit porro repellat magnam illo libero reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur quo similique cum. Iste consequuntur totam veniam, voluptates, dolores libero provident ut a, Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut quas volu
                    </p>
                </div>
            </div>
        </div>
    )
}