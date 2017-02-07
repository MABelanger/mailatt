"use strict";

import { expect }  				from 'chai';
import attachment 				from './attachment';

function isAttachment(attachment) {
	return(
		typeof attachment.filename === 'string' &&
		typeof attachment.path === 'string'
	);
}

describe('attachment', function() {
	describe('API getAttachment', function() {

		it('should work!', function() {
			expect(true).to.be.true;
		});

		it('should be an array of two attachments', function(){
			let args = ['/mnt/path/file1.txt', '/mnt/path/file2.txt'];

			function isArrayOfAttachment(array) {
				return array.every(function(item) {
					return isAttachment(item);
				});
			}
			expect(attachment.getAttachment(args)).to.satisfy(isArrayOfAttachment);
		});

		it('should be an array length of two', function(){
			let args = ['/mnt/path/file1.txt', '/mnt/path/file2.txt'];

			let attachments = attachment.getAttachment(args);
			expect(attachments).to.have.length(2);
		});


		it('should be an array of length of one', function(){
			let args = ['/mnt/path/file1.txt'];

			let attachments = attachment.getAttachment(args);
			expect(attachments).to.have.length(1);
		});

		it('should be an array of length of zero if no args', function(){
			let args = undefined;

			let attachments = attachment.getAttachment(args);
			expect(attachments).to.have.length(0);
		});

	});
});
