export class User {
    id: number
    name: string | null
    active: boolean
    address?: string | null

    constructor() {
        this.id = 0
        this.name = null
        this.active = false
    }
}
