/* eslint-disable no-lone-blocks */
import { List, ListItem } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductsCard = ({title, monthlyPrice, yearlyPrice, description, listItems, idealFor, link = "/products/buy",}) => {
    return (
        <div className="flex flex-col bg-[#2d4087] px-8 md:px-16 py-10 my-6 rounded-2xl shadow-md gap-8 items-start justify-between max-w-[700px] md:max-w-[1200px] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col justify-start w-full h-full space-y-8 flex-grow">
                {/* Title */}
                <h2 className="text-3xl font-bold text-secondary text-center">{title}</h2>
        
                {/* Pricing */}
                <div className="flex gap-20 space-y-1 place-self-center">
                    <h3 className="text-xl font-semibold">{monthlyPrice} <span className="text-sm font-normal text-gray-200">/ MONTH</span></h3>
                    <h3 className="text-md text-gray-200 font-semibold">{yearlyPrice} <span className="font-normal">/ YEAR</span></h3>
                </div>

                <div className="border-t border-secondary border-dotted" />
        
                {/* Description */}
                <div>
                    <h4 className="font-semibold text-lg">Description:</h4>
                    <p className="text-sm text-gray-100 leading-relaxed">{description}</p>
                </div>
        
                <div className="border-t border-secondary border-dotted" />

                {/* List Items */}
                <div className="flex-grow">
                    <h4 className="font-semibold text-lg mb-2">Includes:</h4>
                    <List spacing={2} className="list-disc pl-4">
                        {listItems.map((listItem, i) => (
                        <ListItem key={i} className="text-sm text-gray-100">
                            {listItem}
                        </ListItem>
                        ))}
                    </List>
                </div>

                <div className="border-t border-secondary border-dotted" />

                {/* Ideal For */}
                <p className="text-xs text-gray-300 italic pt-2">
                    🎯 <span className="font-medium">Ideal for:</span> {idealFor}
                </p>
                <div className="mt-auto pt-6">
                    <Link to={"/products/buy"}><Button w={"full"}>Buy Now</Button></Link>
                </div>
            </div>
        </div>
    );
}


 