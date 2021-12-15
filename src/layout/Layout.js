import React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default function Layout({ children }) {
    return (
        <main>
        <nav class="navbar">
        <div class="navbar-brand">
            <div class="navbar-item title">
                <Link to="/">Amy Spitz</Link>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <a href="https://www.linkedin.com/in/amy-spitz/">linkedin</a>
            </div>
            <div class="navbar-item">
                <a href="mailto:amy.k.rutz@gmail.com">email</a>
            </div>
        </div>
        </nav>
        <section class="section">
            <div class="container">
                {children}
            </div>
        </section>
        
        </main>
    )
}