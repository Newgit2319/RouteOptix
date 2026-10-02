import "../styles/dashboard.css";

function DashboardLayout({
                             header,
                             kpis,
                             analytics,
                             controls,
                             map,
                             sidebar,
                         }) {

    return (

        <div className="dashboard">

            <header className="dashboard-header">
                {header}
            </header>

            <section className="dashboard-kpis">
                {kpis}
            </section>

            <section className="dashboard-analytics">
                {analytics}
            </section>

            <section className="workspace">

                <aside className="left-panel">
                    {controls}
                </aside>

                <main className="center-panel">
                    {map}
                </main>

                <aside className="right-panel">
                    {sidebar}
                </aside>

            </section>

        </div>

    );

}

export default DashboardLayout;