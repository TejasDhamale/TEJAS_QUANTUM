
function RolesButton({ role }) {
    return (
        <div className="px-7 py-3 rounded-xl border-2 border-white/5 bg-gradient-to-r from-white/10 to-white/[0.05] backdrop-blur-md text-sm font-medium text-gray-300 transition-all duration-300 hover:border-orange-300 hover:text-white hover:shadow-[0_0_20px_rgba(255,127,80,0.8)] cursor-default select-none ring-1 ring-transparent">
            {role}
        </div>
    )
}

export default RolesButton;