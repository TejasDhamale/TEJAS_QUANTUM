import GitHubCalendar from "react-github-calendar";

function ContributionGraph() {
    const customTheme = {
        dark: [
            "#161b22", // level 0 (no contributions)
            "#0e4429", // level 1
            "#006d32", // level 2
            "#26a641", // level 3
            "#39d353", // level 4 (highest)
        ],
    };

    return (
        <div className="text-white/80 w-[calc(100%-2px)] no-scrollbar">
            <GitHubCalendar username="AryanDhamale" responsive={true} theme={customTheme} />
        </div>
    );
}

export default ContributionGraph;