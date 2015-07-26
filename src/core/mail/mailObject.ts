/**
 * Object used to store the mail information to be loaded in MailServer instance
 * @class MailObject
 */
class MailObject{
	
	private from: string;
	private to: string;
	private subject: string;
	private text: string;
	private cc: string;
	
	/**
	 * Returns the From address text
	 * @return {string}
	 */
	public getFromAddress(): string {
		return this.from;
	}
	
	/**
	 * Set the From address data
	 * @param {string} from
	 * @return {void}
	 */
	public setFromAddress(from: string): void {
		this.from = from;
	}
	
	/**
	 * Returns the To address text
	 * @return {string}
	 */
	public getToAddress(): string {
		return this.to;
	}
	
	/**
	 * Set the To address data
	 * @param {string} to
	 * @return {void}
	 */
	public setToAddress(to: string): void {
		this.to = to;
	}
	
	/**
	 * Returns the Copy address text
	 * @return {string}
	 */
	public getCopyAddress(): string {
		return this.cc;
	}
	
	/**
	 * Set the Copy address data
	 * @param {string} copy
	 * @return {void}
	 */
	public setCopyAddress(copy: string): void {
		this.cc = copy;
	}
	
	/**
	 * Returns the Subject text
	 * @return {string}
	 */
	public getSubject(): string {
		return this.subject;
	}
	
	/**
	 * Set the Subject data
	 * @param {string} subject
	 * @return {void}
	 */
	public setSubject(subject: string): void {
		this.subject = subject;
	}
	
	/**
	 * Returns the Message text
	 * @return {string}
	 */
	public getMessage(): string {
		return this.text;
	}
	
	/**
	 * Set the Message data
	 * @param {string} message
	 * @return {void}
	 */
	public setMessage(message: string): void {
		this.text = message;
	}
}
export = MailObject;