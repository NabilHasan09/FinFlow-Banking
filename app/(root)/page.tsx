import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox";


const home = () => {
    const loggedIn = {firstName: 'Nabil'};

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title ="Welcome"
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext= "Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts = {[]}
                        totalBanks = {1}
                        totalCurrentBalance = {69942099}
                    />

                </header>
            </div>   
      </section>
    )
}

export default home