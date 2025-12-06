// Mobile Optimization Fix for Courses Page
// Add this code to improve mobile experience

// 1. Add mobile level selector (dropdown) at the top of the page
// Replace the current structure with this improved version:

{
    !selectedCourse && (
        <>
            {/* Mobile Level Selector - Visible only on mobile */}
            <div className="md:hidden mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Niveau Scolaire
                </label>
                <select
                    value={activeLevel}
                    onChange={(e) => setActiveLevel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/10 text-white font-medium focus:border-blue-500 focus:outline-none"
                >
                    <optgroup label="📚 Collège">
                        <option value="6ème">6ème</option>
                        <option value="5ème">5ème</option>
                        <option value="4ème">4ème</option>
                        <option value="3ème">3ème</option>
                    </optgroup>
                    <optgroup label="🎓 Lycée">
                        <option value="Seconde">Seconde</option>
                        <option value="Première">Première</option>
                        <option value="Terminale">Terminale</option>
                    </optgroup>
                </select>
            </div>

            {/* Desktop Sidebar - Hidden on mobile */}
            <div className="w-64 border-r border-white/10 bg-[#0F1115] hidden md:flex flex-col fixed h-[calc(100vh-4rem)] overflow-y-auto">
                {/* Existing sidebar content */}
            </div>
        </>
    )
}

// 2. Improve course cards for mobile
// Update the grid to be single column on mobile:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {/* Course cards */}
</div>

// 3. Improve chapter view for mobile
// Add better spacing and font sizes for mobile:
<div className="prose prose-invert max-w-none 
    prose-headings:text-white 
    prose-h3:text-lg md:prose-h3:text-xl 
    prose-p:text-sm md:prose-p:text-base
    prose-li:text-sm md:prose-li:text-base">
    {/* Chapter content */}
</div>

// 4. Make exercise cards stack on mobile
<div className="grid grid-cols-1 gap-3">
    {/* Exercise options */}
</div>

// 5. Improve back button visibility on mobile
<button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm md:text-base">
    <ArrowLeft size={16} className="md:w-5 md:h-5" />
    <span className="hidden sm:inline">Retour aux cours</span>
    <span className="sm:hidden">Retour</span>
</button>
