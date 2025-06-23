export const BenefitsCard = ({title, desc}) => {
    return (
        <div className="bg-[#2d4087] p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[#C5D0F5]">
                    {desc}.
                </p>
                </div>
    )
}