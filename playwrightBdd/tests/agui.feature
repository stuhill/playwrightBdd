Feature: AGUI
    @login
    Scenario: Agent Logs in to AGUI
        Given SSO login page is accessible
        When username is entered "d50qamode3may.Agent.Two"
        And password is entered "Password123!"
        Then agent login is successful
        When agent selects "Contact Center Agent Workspace" tile
        Then agent navigates to Agent Workspace
        When agent changes status to "Available"
        #Then agent status is changed to "Available"